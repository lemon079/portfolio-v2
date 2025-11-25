import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 88,
          background: "linear-gradient(135deg, #A78BFA 0%, #60A5FA 50%, #06B6D4 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "20%",
          color: "white",
          fontWeight: "900",
        }}
      >
        BT
      </div>
    ),
    {
      width: 32,
      height: 32,
    }
  );
}
