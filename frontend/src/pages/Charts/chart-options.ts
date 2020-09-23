export const pieOptions = {
  chart: {
    background: "transparent",
    foreColor: "red",
  },
  colors: ["#A8DADC", "#ED7947", "#00D4FF", "#FFD6A5"],
  legend: {
    show: false,
  },
  tooltip: {
    enabled: true,
  },
  dataLabels: {
    enabled: true,
    offsetX: "100px",
    offsetY: "100px",
    style: {
      colors: ["#A8DADC", "#ED7947", "#00D4FF", "#FFD6A5"],
      fontSize: "20px",
      fontFamily: "Play, sans-serif",
      fontWeight: 700,
    },
  },
  plotOptions: {
    pie: {
      customScale: 0.7,
      expandOnClick: false,
      dataLabels: {
        offset: 60,
      },
    },
  },
}

export const barOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  colors: ["#ED7947"],
  grid: {
    show: false,
  },
  plotOptions: {
    bar: {
      horizontal: true,
      endingShape: "rounded",
      startingShape: "rounded",
      barHeight: "30px",
    },
  },
  datLabels: {
    enabled: true,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: [
    {
      labels: {
        maxWidth: 360,
        style: {
          colors: "#00D4FF",
          fontSize: "18px",
          fontFamily: "Play, sans-serif",
          fontWeight: 700,
        },
      },
    },
  ],
  title: {
    text: "Quantidade de votos",
    floating: true,
    offsetY: 630,
    align: "right",
    style: {
      color: "#ED7947",
      fontSize: "16px",
      fontFamily: "Play, sans-serif",
    }
  },
}