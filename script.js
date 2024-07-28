

async function fetchFearAndGreed() {


  try {
    const response = await fetch('https://api.alternative.me/fng/?limit=31');
    const data = await response.json();

    const now = data.data[0];
    const yesterday = data.data[1];
    const lastWeek = data.data[7];
    const lastMonth = data.data[30];

    const needle = document.getElementById('needle');
    const score = document.getElementById('score');
    const nowScore = document.getElementById('nowScore');
    const nowWords = document.getElementById('nowWords');
    const yesterdayScore = document.getElementById('yesterdayScore');
    const yesterdayWords = document.getElementById('yesterdayWords');
    const lastWeekScore = document.getElementById('lastWeekScore');
    const lastWeekWords = document.getElementById('lastWeekWords');
    const lastMonthScore = document.getElementById('lastMonthScore');
    const lastMonthWords = document.getElementById('lastMonthWords');
    let value = now.value;
    let yesterdayIndex = yesterday.value;
    let lastWeekIndex = lastWeek.value;
    let lastMonthIndex = lastMonth.value;
  
    if (value < 0) value = 0;
    if (value > 100) value = 100;
  
    const degree = (value / 100) * 180 - 90; // Convert score to degree (-90 to 90)
    needle.style.transform = `rotate(${degree}deg)`;
  
    // Set the position of the score based on the value ranges
    let left, top, bgColor,nowIndexInWords, yesterdayIndexInWords, lastWeekIndexInWords, lastMonthIndexInWords,nowBgColor, yesterdayBgColor, lastWeekBgColor, lastMonthBgColor;
  
    // if (value >= 0 && value <= 10) {
    //     left = 3;
    //     top = 101;
    //     bgColor = '#ff1200';
    // } else if (value >= 11 && value <= 20) {
    //     left = 25.29;
    //     top = 49.262;
    //     bgColor = '#ff1200';
    // } else if (value >= 21 && value <= 30) {
    //     left = 65;
    //     top = 13;
    //     bgColor = '#ff1200';
    // } else if (value >= 31 && value <= 40) {
    //     left = 96;
    //     top = -10;
    //     bgColor = '#ffb000';
    // } else if (value >= 41 && value <= 50) {
    //     left = 155;
    //     top = -40;
    //     bgColor = '#ffb000';
    // } else if (value >= 51 && value <= 60) {
    //     left = 217;
    //     top = -36;
    //     bgColor = '#b3d900';
    // } else if (value >= 61 && value <= 70) {
    //     left = 271.262;
    //     top = -21.2899;
    //     bgColor = '#b3d900';
    // } else if (value >= 71 && value <= 80) {
    //     left = 326.262;
    //     top = 14.7101;
    //     bgColor = '#0a8500';
    // } else if (value >= 81 && value <= 90) {
    //     left = 348.262;
    //     top = 63.7101;
    //     bgColor = '#07e307';
    // } else if (value >= 91 && value <= 100) {
    //     left = 359.262;
    //     top = 107.7101;
    //     bgColor = '#07e307';
    // }
  
  
    //for now
    if (value >= 0 && value <= 24) {
      valueInWords = 'EXTREME FEAR';
      nowBgColor = '#ff1200';
    } else if (value >= 25 && value <= 49) {
      valueInWords = 'FEAR';
      nowBgColor = '#ff7f00';
    } else if (value == 50) {
      valueInWords = 'NEUTRAL';
      nowBgColor = '#b3d900';
    } else if (value >= 51 && value <= 74) {
      valueInWords = 'GREED';
      nowBgColor = '#b3d900';
    } else if (value >= 75 && value <= 100) {
      nowBgColor = '#07e307';
      valueInWords = 'EXTREME GREED';
    }
  
  
    //for yesterday
    if (yesterdayIndex >= 0 && yesterdayIndex <= 24) {
      yesterdayIndexInWords = yesterday.value_classification.toUpperCase();
      yesterdayBgColor = '#ff1200';
    } else if (yesterdayIndex >= 25 && yesterdayIndex <= 49) {
      yesterdayIndexInWords = yesterday.value_classification.toUpperCase();
      yesterdayBgColor = '#ff7f00';
    } else if (yesterdayIndex == 50) {
      yesterdayIndexInWords = yesterday.value_classification.toUpperCase();
      yesterdayBgColor = '#b3d900';
    } else if (yesterdayIndex >= 51 && yesterdayIndex <= 74) {
      yesterdayIndexInWords = yesterday.value_classification.toUpperCase();
      yesterdayBgColor = '#b3d900';
    } else if (yesterdayIndex >= 75 && yesterdayIndex <= 100) {
      yesterdayBgColor = '#07e307';
      yesterdayIndexInWords = yesterday.value_classification.toUpperCase();
    }
  
  
    //for lastWeek
    if (lastWeekIndex >= 0 && lastWeekIndex <= 24) {
      lastWeekIndexInWords = lastWeek.value_classification.toUpperCase();
      lastWeekBgColor = '#ff1200';
    } else if (lastWeekIndex >= 25 && lastWeekIndex <= 49) {
      lastWeekIndexInWords = lastWeek.value_classification.toUpperCase();
      lastWeekBgColor = '#ff7f00';
    } else if (lastWeekIndex == 50) {
      lastWeekIndexInWords = lastWeek.value_classification.toUpperCase();
      lastWeekBgColor = '#b3d900';
    } else if (lastWeekIndex >= 51 && lastWeekIndex <= 74) {
      lastWeekIndexInWords = lastWeek.value_classification.toUpperCase();
      lastWeekBgColor = '#b3d900';
    } else if (lastWeekIndex >= 75 && lastWeekIndex <= 100) {
      lastWeekBgColor = '#07e307';
      lastWeekIndexInWords = lastWeek.value_classification.toUpperCase();
    }
  
  
    //for lastMonth
    if (lastMonthIndex >= 0 && lastMonthIndex <= 24) {
      lastMonthIndexInWords = lastMonth.value_classification.toUpperCase();
      lastMonthBgColor = '#ff1200';
    } else if (lastMonthIndex >= 25 && lastMonthIndex <= 49) {
      lastMonthIndexInWords = lastMonth.value_classification.toUpperCase();
      lastMonthBgColor = '#ff7f00';
    } else if (lastMonthIndex == 50) {
      lastMonthIndexInWords = lastMonth.value_classification.toUpperCase();
      lastMonthBgColor = '#b3d900';
    } else if (lastMonthIndex >= 51 && lastMonthIndex <= 74) {
      lastMonthIndexInWords = lastMonth.value_classification.toUpperCase();
      lastMonthBgColor = '#b3d900';
    } else if (lastMonthIndex >= 75 && lastMonthIndex <= 100) {
      lastMonthBgColor = '#07e307';
      lastMonthIndexInWords = lastMonth.value_classification.toUpperCase();
    }
  
    //moving score
    score.style.left = `${left}px`;
    score.style.top = `${top}px`;
    score.style.backgroundColor = nowBgColor;
    score.textContent = value;
  
  
    //now score and word
    nowScore.style.backgroundColor = nowBgColor;
    nowScore.textContent = value;
    nowWords.style.color = nowBgColor;
    nowWords.textContent = valueInWords;
  
    //yesterday score and word
    yesterdayScore.style.backgroundColor = yesterdayBgColor;
    yesterdayScore.textContent = yesterdayIndex;
    yesterdayWords.style.color = yesterdayBgColor;
    yesterdayWords.textContent = yesterdayIndexInWords;
  
    //lastWeek score and word
    lastWeekScore.style.backgroundColor = lastWeekBgColor;
    lastWeekScore.textContent = lastWeekIndex;
    lastWeekWords.style.color = lastWeekBgColor;
    lastWeekWords.textContent = lastWeekIndexInWords;
  
    //lastMonth score and word
    lastMonthScore.style.backgroundColor = lastMonthBgColor;
    lastMonthScore.textContent = lastMonthIndex;
    lastMonthWords.style.color = lastMonthBgColor;
    lastMonthWords.textContent = lastMonthIndexInWords;

} catch (error) {
    console.error('Error fetching Fear and Greed Index data:', error);
}


}

window.onload = fetchFearAndGreed;
