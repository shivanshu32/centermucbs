export interface TrainingProgram {
  title: string;
  location: string;
  date: string;
  duration: string;
  targetAudience: string;
  programmeFee: string;
  brochureUrl?: string; // Optional field for download brochure
  registrationUrl?: string;
}

export const upcomingTrainingPrograms: TrainingProgram[] = [
  {
    title: "Strengthening Governance, Compliance, Risk Management & Business Growth",
    location: "Amritsar, Punjab",
    date: "September 11, 2026 to September 12, 2026",
    duration: "2 days",
    targetAudience: "Chairpersons, board members, managing directors/CEOs and senior officers of Urban, District Central and State Co-operative Banks",
    programmeFee: "Rs. 8,500 + GST non-residential; Rs. 18,000 + GST residential (double sharing); Rs. 28,000 + GST residential (single sharing)",
    brochureUrl: "/Management-Development-Programme-Amritsar-September-2026.pdf",
    registrationUrl: "https://forms.gle/GJa2SqFGqBDa6tsa7"
  },
//   {
//     title: "Corporate Governance, & Risk Management in UCBs",
//     location: "Udaipur, Rajasthan",
//     date: "February 22, 2025 - February 23, 2025",
//     duration: "2 days",
//     targetAudience: "Targeted for Chairman/Directors and C.E.O.s of UCBs",
//     programmeFee: "₹ 3000/- + GST per participant for non - residential Rs. 6000/- + GST for residential (Double sharing) Rs. 7000/- + GST for residential (Single sharing)",
//     brochureUrl: "/GovernanceandRiskManagementinUCBs.pdf"
//   },
//   {
//     title: "Credit Management and Investment Management in UCBs",
//     location: "Indian Institute of Banking & Finance, Professional Development Centre, Northern Zone, Delhi",
//     date: "March 03, 2025 - March 04, 2025",
//     duration: "2 days",
//     targetAudience: "Targeted for Officers working in UCBs",
//     programmeFee: "₹ 8500/- + GST per participant for non – residential Rs. 17000/- + GST for residential (Double sharing) Rs. 22000/- + GST for residential (Single sharing)"
//   },
//   {
//     title: "KYC/AML and Customer Services in UCBs",
//     location: "IIBF, Professional Development Centre, Northern Zone, Delhi",
//     date: "February 14, 2025 - February 15, 2025",
//     duration: "2 days",
//     targetAudience: "Targeted for Officers working in UCBs",
//     programmeFee: "₹ Rs. 7500/- + GST per participant for non - residential Rs. 12500/- + GST for residential (Double sharing) Rs. 15000/- + GST for residential (Single sharing)",
//     brochureUrl: "/KYC-AML.pdf"
//   },
//   {
//     title: "Board Meetings, Annual General Meetings and Writing of Proceedings",
//     location: "Kasauli, Himachal Pradesh",
//     date: "March 22, 2025 to March 23, 2025",
//     duration: "2 days",
//     targetAudience: "Targeted for Compliance officers and Senior Officers working in UCBs",
//     programmeFee: "₹ Rs. 8500/- + GST per participant for non – residential Rs. 17000/- + GST for residential (Double sharing) Rs. 22000/- + GST for residential (Single sharing)",
//     brochureUrl: "/BoardMeetingsinUCBs.pdf"
//   },
//   {
//     title: "KYC/AML and Customer Services in Co-operative Banks",
//     location: "IIBF, Delhi",
//     date: "April 19, 2025 to April 19, 2025",
//     duration: "1 day",
//     targetAudience: "Targeted for Officers working in UCBs/DCCBs/CCBs",
//     programmeFee: "Rs. 3000/- + GST per participant for non - residential Rs. 6000/- + GST for residential (Double sharing) Rs.7000/- + GST for residential (Single sharing)",
//     brochureUrl: ""
//   },
  {
    title: "KYC/AML and Customer Services and Risk Management in Co- operative Banks",
    location: "Jaipur Rajasthan",
    date: "October 30, 2025 to October 31, 2025",
    duration: "2 days",
    targetAudience: "Targeted for C.E.O.s/MDs, and Officers working in Co-operative Banks",
    programmeFee: "Rs. 4500/- + GST per participant for non – residential Rs. 10000/- + GST for residential (Double sharing) Rs. 15000/- + GST for residential (Single sharing)",
    brochureUrl: ""
  },
  
  {
    title: "Audit, Compliance Management, Risk Management in Co-operative Banks",
    location: "Dehradun, Uttarakhand",
    date: "November 06, 2025 to Novmber 07, 2025",
    duration: "2 days",
    targetAudience: "Targeted for C.E.O.s/MDs,and Officers working in Co-operative Banks",
    programmeFee: "Rs. 4500/- + GST per participant for non – residential Rs. 10000/- + GST for residential (Double sharing) Rs. 15000/- + GST for residential (Single sharing)",
    brochureUrl: ""
  },
  {
    title: "Board Meetings, Annual General Meetings and Writing of Proceedings",
    location: "Gangtok, Sikkim",
    date: "November 24, 2025 to November 25, 2025",
    duration: "2 days",
    targetAudience: "Targeted for Chairman/Directors and C.E.O.s, Officers of Co-operative Banks",
    programmeFee: "Rs. 5500/- + GST per participant for non – residential Rs. 12000/- + GST for residential (Double sharing) Rs. 18000/- + GST for residential (Single sharing)",
    brochureUrl: ""
  },
  {
    title: "Credit Administration and Recovery Management",
    location: "Nainital, Uttarakhand",
    date: "December 11, 2025 to December 12, 2025",
    duration: "2 days",
    targetAudience: "Targeted for Chairman/Directors and C.E.O.s , officers of Co-operative Banks",
    programmeFee: "Rs. 4500/- + GST per participant for non – residential Rs. 10000/- + GST for residential (Double sharing) Rs. 15000/- + GST for residential (Single sharing)",
    brochureUrl: ""
  },
  {
    title: "Governance and Risk Management in Co- operative Banks",
    location: "Kashmir, Jammu and Kashmir",
    date: "December 29, 2025 to December 30, 2025",
    duration: "2 days",
    targetAudience: "Targeted for C.E.O.s/MDs, and Officers working in Co-operative Banks",
    programmeFee: "Rs. 5500/- + GST per participant for non – residential Rs. 15000/- + GST for residential (Double sharing) Rs. 21000/- + GST for residential (Single sharing)",
    brochureUrl: ""
  }
  
//   {
//     title: "Credit Management and Investment Management in Co- operative Banks",
//     location: "IIBF, Delhi",
//     date: "May 16, 2025 to May 17, 2025",
//     duration: "2 days",
//     targetAudience: "Targeted for Officers working in UCBs/DCCBs/CCBs",
//     programmeFee: "Rs. 3000/- + GST per participant for non - residential Rs. 6000/- + GST for residential (Double sharing) Rs.7000/- + GST for residential (Single sharing)",
//     brochureUrl: ""
//   },
//   {
//     title: "Information Technology and Cyber Security in Co-operative Banks",
//     location: "IIBF, Delhi",
//     date: "June 9, 2025 to June 9, 2025",
//     duration: "1 days",
//     targetAudience: "Targeted for Officers working in IT department of UCBs/DCCBs/CCBs",
//     programmeFee: "Rs. 3000/- + GST per participant for non - residential Rs. 6000/- + GST for residential (Double sharing) Rs.7000/- + GST for residential (Single sharing)",
//     brochureUrl: ""
//   }
];
