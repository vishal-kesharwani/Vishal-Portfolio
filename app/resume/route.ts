import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";

export async function GET() {
  const filePath = join(process.cwd(), "public", "Vishal_Kesharwani_Resume.pdf");
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Vishal_Kesharwani_Resume.pdf"',
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
