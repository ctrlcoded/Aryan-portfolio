import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aryan Raghav — Software Engineer & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "90px",
                    background:
                        "radial-gradient(120% 120% at 20% 0%, #12233f 0%, #000000 55%)",
                    color: "white",
                    fontFamily: "sans-serif",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "18px",
                        fontSize: 26,
                        color: "#2997ff",
                        fontWeight: 700,
                        letterSpacing: 3,
                        textTransform: "uppercase",
                    }}
                >
                    <div
                        style={{
                            width: 54,
                            height: 54,
                            borderRadius: 14,
                            border: "3px solid #2997ff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 28,
                            color: "white",
                            fontWeight: 800,
                        }}
                    >
                        AR
                    </div>
                    Portfolio
                </div>

                <div
                    style={{
                        marginTop: 40,
                        fontSize: 88,
                        fontWeight: 800,
                        letterSpacing: -3,
                        lineHeight: 1.05,
                        display: "flex",
                    }}
                >
                    Aryan Raghav
                </div>

                <div
                    style={{
                        marginTop: 24,
                        fontSize: 38,
                        color: "#a5a5ad",
                        fontWeight: 400,
                        maxWidth: 900,
                        lineHeight: 1.3,
                        display: "flex",
                    }}
                >
                    Software engineer building AI products and scalable systems.
                </div>
            </div>
        ),
        { ...size }
    );
}
