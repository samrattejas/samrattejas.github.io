<script>
      const doneBtn = document.getElementById("doneBtn");
      const clearBtn = document.getElementById("clearBtn");
      const copyBtn = document.getElementById("copyBtn");
      const dropdown = document.getElementById("dropdown");
      const dropdown2 = document.getElementById("dropdown2");
      const dropdown3 = document.getElementById("dropdown3");
      const dropdown4 = document.getElementById("dropdown4");
      const dropdown5 = document.getElementById("dropdown5");
      const dropdown6 = document.getElementById("dropdown6");
      const dropdown7 = document.getElementById("dropdown7");
      const dateSelection = document.getElementById("dateSelection");
      const numberSelection = document.getElementById("numberSelection");
      const numberSelection2 = document.getElementById("numberSelection2");
      const multipleSelectionBox = document.getElementById("multipleSelectionBox");
      const multipleSelectionBox2 = document.getElementById("multipleSelectionBox2");
      const multipleSelectionBox3 = document.getElementById("multipleSelectionBox3");
		const multipleSelectionBox4 = document.getElementById("multipleSelectionBox4");
		const multipleSelectionBox5 = document.getElementById("multipleSelectionBox5");
    

      const generatedText2 = document.getElementById("generatedText2");
      const patientName = document.getElementById("patientName");

      doneBtn.addEventListener("click", function () {
        const patientNameValue = document.getElementById("patientName").value.trim() || "Patient";
        const gender = dropdown2.value;
        const isMale = gender === "MALE";
        const isFemale = gender === "FEMALE";
        const pronoun = isMale ? "he" : isFemale ? "she" : "the patient";
		  
		  let hospitalizationText;
  if (dropdown.value === "REFERRED BY PHYSICIAN.") {
    hospitalizationText = pronoun + " was referred by physician.";
  } else {
    hospitalizationText = pronoun + " was recently hospitalized at " + dropdown.value + " AND DISCHARGED TO HOME ON " + dateSelection.value;
  }hospitalizationText
  
        let dischargeText = " AND DISCHARGED TO HOME ON " + dateSelection.value;
        if (dropdown.value === "REFERRED BY PHYSICIAN") {
          dischargeText = ""; // Remove discharge sentence
        }

		  const evalNeeds = Array.from(multipleSelectionBox4.selectedOptions)
    .map((option) => {
      if (option.value === "RN") {
        return "NEEDS RN TO EVAL AND ASSIST WITH DISEASE EDUCATION AND MEDICATION MANAGEMENT.";
      } else if (option.value === "OT") {
        return "NEEDS OT TO EVAL AND ASSIST WITH ADLS.";
      } else if (option.value === "ST") {
        return "NEEDS ST TO EVAL AND ASSIST WITH MEMORY AND COGNITION.";
      }
    })
    .join(" ");evalNeeds
	
	let medicationEducation = "";
  let isMedicationSelected = false;

  Array.from(multipleSelectionBox5.selectedOptions).forEach(option => {
    isMedicationSelected = true;
    if (option.value === "Opioids") {
      medicationEducation += "Opioids: Patient has been educated on the proper use and risks of opioids, including potential for addiction and overdose. ";
    }
    if (option.value === "Anticoagulants") {
      medicationEducation += "Anticoagulants: Patient has been instructed on the importance of regular monitoring and potential bleeding risks associated with anticoagulants. ";
    }
    if (option.value === "Hyperglycemic") {
      medicationEducation += "Hyperglycemic: Patient has been advised on managing hyperglycemia, including diet, exercise, and regular blood sugar monitoring. ";
    }
  });

  let highRiskMedicationSection = isMedicationSelected ? "\n\nHIGH RISK MEDICATIONS IDENTIFIED: " + medicationEducation : "";

		  
        generatedText.value =
          "SKILLED PT EVAL DONE TODAY TO FIND OUT CLIENT LIMITATION FOR FUNCTIONAL MOBILITY AND DAILY ACTIVITIES. " + patientNameValue + " IS A " + numberSelection.value +  " Y.O." +  dropdown2.value +   
          " PRESENTED WITH IMPAIRED BALANCE AND MUSCLE STRENGTH. "   + hospitalizationText +
          "\n\nPAST MEDICAL HISTORY INCLUDES " +
          Array.from(multipleSelectionBox.selectedOptions, (option) => option.value).join(", ")  +   ". " + pronoun + " NEEDS TO USE " +
          Array.from(multipleSelectionBox2.selectedOptions, (option) => option.value).join(", ")  +  " for mobility AND unable to leave home without assistance from a caregiver. " + evalNeeds +  "\n\nThe results of the physical examination indicated impairments in the following domains:" 
          + "\n\nExtremity strength: The patient exhibited multi-segmental lower extremity weakness as indicated by the results of MMT" + dropdown3.value + " Additionally, functional LE weakness was present as indicated by a score of 8 on the 30-Sec chair raise test which is much less than the cutoff for functional Lower extremity strength for individuals in PATIENT’S age/sex group: " + dropdown4.value + "\n\nBalance: The patient has poor dynamic balance as indicated by a score of " + dropdown5.value + " on the balance portion of the TinNetti test. Additionally, fall risk is indicated BY A SCORE OF " + numberSelection2.value + " seconds on the “Timed Up & Go” test." + "\n\nGait: The patient exhibited abnormal gait pattern characterized by marked sway when using the walker, reduced toe clearance, reduced cadence, increased stance to swing ratio, poor navigation of small spaces, poor sequencing with the assistive device, marked lateral deviation, and difficulty with transitional phases when pivoting and turning. The gait safety and function is diminished as indicated by a score of " + dropdown6.value + " on the gait portion of the TinNetti test." + "\n\nLIVING SITUATION: \nLIVES WITH A " + Array.from(multipleSelectionBox3.selectedOptions, (option) => option.value).join(", ") + " WHO ASSIST WITH ADLS AND TRANSPORTATION. Patient lives in a " + dropdown7.value + 
    Array.from(multipleSelectionBox.selectedOptions, (option) => option.value).join(", ") +
    ". " + highRiskMedicationSection +  "\n\nPATIENTS GOALS FOR THERAPY INCLUDE IMPROVE LE MUSCLE STRENGTH AND ENDURANCE TO ALLOW PATIENT TO DO ADLS IND.  EDUCATED ABOUT IMPORTANCE OF FOLLOWING HEP, SAFETY AND FALL PRECAUTIONS, PROPER USE OF ASSISTIVE DEVICE FOR COMMUNITY MOBILITY, VERBAL/WRITTEN INSTRUCTIONS PROVIDED, DISCUSSED ABOUT FURTHER VISITS, POC TO REACH TOWARDS GOAL, INSTRUCTED ON CALL ELARA FIRST FOR ANY NON EMERGENCY NEEDS, EDUCATED ON IMPORTANCE OF CONT THERAPY AND HEP FOLLOWING DISCHARGE." 
    });

    clearBtn.addEventListener("click", function () {
      generatedText.value = "";
    });

    copyBtn.addEventListener("click", function () {
      generatedText.select();
      document.execCommand("copy");
    });
	     </script>
