# Kanye Quote Generator

+ This is a simple web application that generates random Kanye West quotes and allows users to copy the displayed quote to their clipboard. It utilizes the Kanye.rest API to fetch random Kanye West quotes.

**How to Use**

1. Click the "Generate Quote" button to fetch a random Kanye West quote.
2. Once the quote is displayed, click the "Copy Quote" button to copy the quote to your clipboard.
   
**Features**

+ Random Quote Generation: Fetches random Kanye West quotes from the Kanye.rest API.
+ Clipboard Copy: Allows users to copy the displayed quote to their clipboard.

**Technologies Used**

+ HTML
+ CSS
+ JavaScript
+ Bootstrap

**Code Overview**

The JavaScript code consists of two main functions:

1. `fetchQuote`: This function fetches a random quote from the Kanye.rest API and updates the HTML with the fetched quote. If there's an error fetching the quote, it displays an error message.
2. `copyQuote`: This function copies the displayed quote to the user's clipboard. It checks if the browser supports the Clipboard API and executes the copy operation accordingly.

**Error Handling**

+ If there's an error fetching the quote, an error message is displayed, and the user is notified to try again later.
+ If the browser doesn't support copying to the clipboard, an error message is displayed.