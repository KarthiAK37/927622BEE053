# Vite React App

This project is a simple React application created using Vite. It allows users to input numbers, which are then stored and used to calculate the average. The application fetches data from a server and updates the displayed numbers and average every 5 seconds.

## Project Structure

```
vite-react-app
├── src
│   ├── App.jsx         # Main React component managing state and fetching data
│   └── main.jsx        # Entry point of the React application
├── index.html          # Main HTML file for the application
├── package.json        # Configuration file for npm, listing dependencies and scripts
├── vite.config.js      # Configuration settings for Vite
└── README.md           # Documentation for the project
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd vite-react-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Enter a number in the input field and click "Add Number" to include it in the calculation.
- The application will display the current numbers and their average.
- The numbers will be fetched from the server every 5 seconds, updating the displayed values accordingly.

## License

This project is licensed under the MIT License.