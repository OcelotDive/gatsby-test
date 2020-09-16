function downloadCsv(csv, filename) {
  let csvFile
  let downloadLink

  // CSV FILE
  csvFile = new Blob([csv], { type: "text/csv" })

  // Download link
  downloadLink = document.createElement("a")

  // File name
  downloadLink.download = filename

  // We have to create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile)

  // Make sure that the link is not displayed
  downloadLink.style.display = "none"

  // Add the link to your DOM
  document.body.appendChild(downloadLink)

  // Lanzamos
  downloadLink.click()
}

function exportTableToCsv(filename) {
  const csv = []
  const rows = Array.from(document.querySelectorAll("h4, th, td"))
  const table = [document.querySelector("table")]

  for (let j = 0; j < table.length; j++) {
    let formatedText = ""

    rows.forEach(element => {
      if (element.tagName === "H4") {
        formatedText +=
          "\n" +
          "\n" +
          (element.textContent.replace(/,/g, "") + ",").split(" ").join(" ") +
          "\n"
      } else if (element.tagName === "TH") {
        formatedText +=
          "\n" +
          (element.textContent.replace(/,/g, "") + ",").split(" ").join(" ")
      } else {
        formatedText += (element.textContent.replace(/,/g, "") + ",")
          .split(" ")
          .join(",")
      }
    })
    csv.push(formatedText)
  }

  // Download CSV
  downloadCsv(csv.join(""), filename)
}

const format = digit => {
  return digit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const Utils = {
  downloadCsv: downloadCsv,
  exportTableToCsv: exportTableToCsv,
  format: format,
}

export default Utils
