import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const required = [
      "fullName",
      "phoneNumber",
      "email",
      "gender",
      "highestEducationQualification",
      "positionAppliedFor",
      "currentCompany",
      "currentDesignation",
      "currentLocation",
      "willingToRelocate",
      "totalYearsOfExperience",
      "currentCTC",
      "noticePeriod",
    ];

    for (const key of required) {
      if (!data?.[key]) {
        return NextResponse.json({ message: `${key} is required` }, { status: 400 });
      }
    }

    // TODO: Replace with your storage/action: save to DB, send to email/Slack, etc.
    // For now, just log to server console.
    console.log("Job application received:", data);

    return NextResponse.json({ message: "Application received" }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }
}
