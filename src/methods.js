// Tobacco Cessation Methods Data - Localized for Michigan
export const methods = [
  {
    name: "Varenicline (Chantix)",
    type: "Prescription Medication",
    description: "Non-nicotine pill that eases cravings and withdrawal symptoms.",
    cost: "$100–$500/month",
    pros: ["Reduces cravings and withdrawal", "Non-nicotine option"],
    cons: ["Prescription required", "May cause vivid dreams or nausea"],
    usage: "Take one pill daily for the first 3 days, then twice daily for 12 weeks. Follow provider instructions.",
    access: "Ask your primary care provider for a prescription. Covered by most Medicaid and commercial plans in Michigan.",
    sample: "No",
    goodrx: "https://www.goodrx.com/chantix",
    image: "images/varenicline.jpg"
  },
  {
    name: "Bupropion (Zyban)",
    type: "Prescription Medication",
    description: "Antidepressant that can also reduce tobacco cravings.",
    cost: "$50–$150/month",
    pros: ["Reduces cravings", "May also help with depression"],
    cons: ["Prescription required", "Possible insomnia or dry mouth"],
    usage: "Take one pill daily for 3 days, then twice daily for 7–12 weeks. Do not take with seizure disorders.",
    access: "Talk to your doctor. Often covered under Michigan Medicaid and most commercial plans.",
    sample: "No",
    goodrx: "https://www.goodrx.com/zyban",
    image: "images/bupropion with drop shaddow.png"
  },
  {
    name: "Nicotine Patch",
    type: "Nicotine Replacement Therapy (NRT)",
    description: "Provides steady nicotine through the skin all day.",
    cost: "$25–$80/month (OTC)",
    pros: ["Simple to use", "Provides steady nicotine delivery"],
    cons: ["May irritate skin", "Less flexible for cravings"],
    usage: "Apply once daily to clean, dry skin. Use for 6–10 weeks depending on dose.",
    access: "Available at Michigan pharmacies. Medicaid and most plans cover with counseling. Free samples may be available through MDHHS.",
    sample: "Yes",
    goodrx: "https://www.goodrx.com/nicotine-patch",
    image: "images/patch.png"
  },
  {
    name: "Nicotine Gum",
    type: "Nicotine Replacement Therapy (NRT)",
    description: "Chewable form that helps manage sudden cravings.",
    cost: "$20–$50/month (OTC)",
    pros: ["Helps manage cravings", "Flexible use"],
    cons: ["Chewing technique required", "Mouth or jaw irritation possible"],
    usage: "Chew slowly until tingling, then park between cheek and gum. Use up to 24 pieces/day.",
    access: "Sold OTC in Michigan stores. Medicaid often covers if paired with counseling.",
    sample: "Yes",
    goodrx: "https://www.goodrx.com/nicotine-gum",
    image: "images/gum.png"
  },
  {
    name: "Nicotine Lozenge",
    type: "Nicotine Replacement Therapy (NRT)",
    description: "Dissolves in the mouth to curb oral cravings.",
    cost: "$25–$60/month (OTC)",
    pros: ["Easy to use", "Good for oral cravings"],
    cons: ["May cause mouth or throat irritation"],
    usage: "Place in mouth and allow to dissolve. Do not chew or swallow. Use every 1–2 hours as needed.",
    access: "Available OTC. Medicaid covers with counseling in Michigan.",
    sample: "Yes",
    goodrx: "https://www.goodrx.com/nicotine-lozenge",
    image: "images/lozenge.png"
  },
  {
    name: "Nicotine Nasal Spray",
    type: "Nicotine Replacement Therapy (Prescription)",
    description: "Rapid‑acting spray for intense cravings.",
    cost: "$50–$150/month",
    pros: ["Fast relief", "Helpful for strong cravings"],
    cons: ["Nasal irritation", "Frequent dosing required"],
    usage: "Spray once in each nostril 1–2 times/hour as needed. Max 40 doses/day.",
    access: "Prescription required. May be covered by Medicaid or commercial insurance in Michigan.",
    sample: "No",
    goodrx: "https://www.goodrx.com/nicotine-nasal-spray",
    image: "images/spray.png"
  },
  {
    name: "Exercise",
    type: "Behavioral Strategy",
    description: "Physical activity to distract and improve mood.",
    cost: "Free",
    pros: ["Reduces cravings", "Boosts mood and energy"],
    cons: ["Requires time and consistency"],
    usage: "Start with brisk walking or any aerobic activity for 10–30 minutes daily.",
    access: "No prescription needed. Use local Michigan trails or parks.",
    sample: "N/A",
    goodrx: "",
    image: "images/walking.jpg"
  },
  {
    name: "Deep Breathing",
    type: "Behavioral Strategy",
    description: "Simple relaxation technique to calm urges.",
    cost: "Free",
    pros: ["Calms nerves", "Accessible anytime"],
    cons: ["Requires practice to be effective"],
    usage: "Inhale slowly through your nose for 4 seconds, hold for 4, exhale for 4. Repeat as needed.",
    access: "Practice anywhere. Helpful for Michigan winters when indoor relaxation is needed.",
    sample: "N/A",
    goodrx: "",
    image: "images/nature.jpg"
  },
  {
    name: "Listening to Music",
    type: "Behavioral Strategy",
    description: "Using favorite tunes as a positive distraction.",
    cost: "Free or subscription",
    pros: ["Distraction from cravings", "Mood booster"],
    cons: ["Requires access to music source"],
    usage: "Play relaxing or energizing playlists during cravings or triggers.",
    access: "Use streaming apps or Michigan libraries offering free music downloads.",
    sample: "N/A",
    goodrx: "",
    image: "images/music.jpg"
  },
  {
    name: "Chewing Raw Carrots or Sunflower Seeds",
    type: "Behavioral Strategy",
    description: "Keeps the mouth busy with a healthy alternative.",
    cost: "$1–$5/week",
    pros: ["Keeps hands and mouth busy", "Healthy alternative"],
    cons: ["May increase snacking"],
    usage: "Carry small containers of raw veggies or seeds. Use during urges to smoke.",
    access: "Available at Michigan grocery stores and food pantries.",
    sample: "N/A",
    goodrx: "",
    image: "images/carrots and sunflower seeds.jpg"
    
  },
  {
    name: "Support Groups",
    type: "Behavioral Strategy",
    description: "Group meetings that offer peer encouragement.",
    cost: "Free or insurance covered",
    pros: ["Peer encouragement", "Structured support"],
    cons: ["May be hard to attend regularly"],
    usage: "Join weekly group sessions in person or online.",
    access: "Find local programs via Michigan Tobacco Quitline (1-800-QUIT-NOW) or MDHHS.",
    sample: "N/A",
    goodrx: "",
    image: "images/support group.jpg"
  }
];

export default methods;
