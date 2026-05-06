export async function GET() {
  // Redirect to the uploaded static PDF in `public/` so the browser opens the file.
  return Response.redirect("/SWATI_YADAWAR_RESUME_.pdf", 302);
}
