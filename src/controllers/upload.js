import { supabase } from "../utils/supabase.js";
import { BUCKET_NAME } from "../utils/index.js";

export async function uploadImage(req, res) {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const destFileName = `${Date.now()}_${file.originalname}`;

    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(destFileName, file.buffer, {
        contentType: file.mimetype,
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      throw new Error(error.message);
    }

    const { publicURL, error: urlError } = supabase.storage.from(BUCKET_NAME).getPublicUrl(destFileName);
    
    if (urlError) {
      throw new Error(urlError.message);
    }

    return res.status(200).json({
      message: "File uploaded successfully",
      imageUrl: publicURL,
    });
  } catch (err) {
    console.error("Upload Error:", err);
    return res.status(500).json({
      message: "Internal Server Error",
      error: err.message,
    });
  }
}
