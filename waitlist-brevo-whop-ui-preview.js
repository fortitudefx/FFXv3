{\rtf1\ansi\ansicpg1252\cocoartf2868
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // ==============================\
// FFX WAITLIST LOGIC (CLEAN)\
// ==============================\
\
// State\
let selectedPath = "VIP";\
let selectedVipPlan = null;\
\
// Elements\
const pathInputs = document.querySelectorAll('input[name="path"]');\
const vipPricing = document.getElementById("ffx-vip-pricing");\
const bootcampPricing = document.getElementById("ffx-bootcamp-pricing");\
\
const form = document.getElementById("waitlistForm");\
const formShell = document.getElementById("form");\
const thankyouShell = document.getElementById("thankyou");\
\
// ==============================\
// PATH SELECTION (VIP / BOOTCAMP / STAY)\
// ==============================\
\
pathInputs.forEach(input => \{\
  input.addEventListener("change", () => \{\
    selectedPath = input.value;\
\
    // Reset views\
    vipPricing.classList.remove("show");\
    bootcampPricing.classList.remove("show");\
\
    if (selectedPath === "VIP") \{\
      vipPricing.classList.add("show");\
    \}\
\
    if (selectedPath === "Bootcamp") \{\
      bootcampPricing.classList.add("show");\
    \}\
  \});\
\});\
\
// ==============================\
// VIP PLAN SELECTION\
// ==============================\
\
const vipPlanInputs = document.querySelectorAll('input[name="vip-plan"]');\
\
vipPlanInputs.forEach(input => \{\
  input.addEventListener("change", () => \{\
    selectedVipPlan = input.value;\
  \});\
\});\
\
// ==============================\
// SUBMIT HANDLER\
// ==============================\
\
form.addEventListener("submit", function (e) \{\
  e.preventDefault();\
\
  // =====================================\
  // BREVO HANDLING (FORM SUBMIT FIRST)\
  // =====================================\
  // If using Brevo embed, this form will already be captured\
  // We do not interfere with Brevo submission here\
\
  // =====================================\
  // WHOP ROUTING LOGIC (PLACEHOLDERS)\
  // =====================================\
\
  let redirectLink = "";\
\
  if (selectedPath === "VIP") \{\
    if (!selectedVipPlan) \{\
      alert("Please select a VIP plan.");\
      return;\
    \}\
\
    const vipLinks = \{\
      monthly: "",\
      quarterly: "",\
      sixmonths: "",\
      annual: "",\
      lifetime: ""\
    \};\
\
    redirectLink = vipLinks[selectedVipPlan];\
  \}\
\
  if (selectedPath === "Bootcamp") \{\
    redirectLink = ""; // Bootcamp link placeholder\
  \}\
\
  if (selectedPath === "Stay") \{\
    redirectLink = ""; // Stay connected \uc0\u8594  no redirect\
  \}\
\
  // =====================================\
  // THANK YOU STATE (ALWAYS SHOW FIRST)\
  // =====================================\
\
  formShell.style.display = "none";\
  thankyouShell.classList.add("show");\
  thankyouShell.scrollIntoView(\{ behavior: "smooth", block: "start" \});\
\
  // =====================================\
  // OPTIONAL REDIRECT (DELAYED)\
  // =====================================\
\
  if (redirectLink && redirectLink !== "") \{\
    setTimeout(() => \{\
      window.location.href = redirectLink;\
    \}, 1800); // delay allows user to see confirmation\
  \}\
\});}
