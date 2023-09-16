import { Text, Image } from "native-base";

export default function Login() {
  return (
    <>
    {/* La imagen puede ser una url o el path de una imagen en la carpeta */}
      <Image
        source={{
          uri: "https://wallpaperaccess.com/full/317501.jpg",
        }}
        alt="Alternate Text"
        size="xl"
      />
    </>
  );
}
