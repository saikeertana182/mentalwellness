// Function to analyze text sentiment
function analyzeSentiment(text) {
    // Lexicon-based approach for sentiment analysis
    const positiveWords = ['happy', 'joy', 'good', 'love', 'great'];
    const negativeWords = ['sad', 'depressed', 'anxious', 'lonely', 'stress'];
  
    // Split text into words and convert to lowercase for case-insensitive matching
    const words = text.toLowerCase().match(/\b\w+\b/g);
  
    let positiveCount = 0;
    let negativeCount = 0;
  
    // Count positive and negative words
    if (words) {
      words.forEach(word => {
        if (positiveWords.includes(word)) {
          positiveCount++;
        } else if (negativeWords.includes(word)) {
          negativeCount++;
        }
      });
    }
  
    // Determine sentiment based on counts
    if (positiveCount > negativeCount) {
      return 'Positive';
    } else if (negativeCount > positiveCount) {
      return 'Negative';
    } else {
      return 'Neutral';
    }
  }
  
  // Function to analyze text
  function analyzeText() {
    const text = document.getElementById('inputText').value;
    const sentiment = analyzeSentiment(text);
    const result = 'Analysis result: ' + sentiment;
    document.getElementById('result').innerText = result;
  }
  
  // Event listener for analyze button click
  document.getElementById('analyzeButton').addEventListener('click', analyzeText);