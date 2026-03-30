import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const category = formData.get("category") as string;
    const rate = formData.get("rate") as string;
    const image = formData.get("image") as File | null;

    const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
    const chatId = process.env.TELEGRAM_CHAT_ID?.trim();

    if (!botToken || !chatId) {
      return NextResponse.json(
        { error: "Telegram bot environment variables are not configured." },
        { status: 500 }
      );
    }

    const caption = `<b>🎬 New Movie Recommendation</b>\n\n<b>Title:</b> ${escapeHtml(title)}\n<b>Category:</b> ${escapeHtml(category)}\n<b>Rating:</b> ${escapeHtml(rate)} ⭐️`;

    let url = "";
    
    // We use FormData to natively support file uploading to Telegram via multipart/form-data
    let payload = new FormData();
    payload.append("chat_id", chatId);
    payload.append("parse_mode", "HTML");

    if (image) {
      url = `https://api.telegram.org/bot${botToken}/sendPhoto`;
      payload.append("photo", image); // The File object directly appended
      payload.append("caption", caption);
    } else {
      url = `https://api.telegram.org/bot${botToken}/sendMessage`;
      payload.append("text", caption);
    }

    const response = await fetch(url, {
      method: "POST",
      // Notice we do NOT set 'Content-Type', fetch automatically sets it with correct boundary for FormData
      body: payload,
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Telegram API Error:", errorData);
        return NextResponse.json({ error: "Failed to send to Telegram" }, { status: response.status });
    }

    return NextResponse.json({ success: true, message: "Recommendation sent successfully!" });
  } catch (error) {
    console.error("Error in telegram route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

function escapeHtml(unsafe: string | null | undefined) {
    if (!unsafe) return "";
    return String(unsafe)
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}
