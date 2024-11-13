import supabase from "./supabase";
export default async function getmusic() {
  const { data, error } = await supabase.from("musiclist").select("*");
  if (error) {
    console.error("Error", error);
  }
  return data;
}
