import { NextResponse } from "next/server";
import { apiCountries } from "@/lib/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const commom = searchParams.get("commom");


  try {
    const endpoint = commom ? `/name/${commom}` : "/all?fields=name,flags";
    const { data } = await apiCountries.get(endpoint);

    return NextResponse.json(data);
  } catch (error: any ) {
    console.error("❌ Erro ao buscar país:", error.message);
    return NextResponse.json(
      { error: "Erro ao buscar país" },
      { status: 500 }
    );
  }
}


""
