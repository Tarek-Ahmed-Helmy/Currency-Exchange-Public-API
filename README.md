# Currency-Exchange-Public-API

## Setup

1. **Clone the repository**
   git clone https://github.com/Tarek-Ahmed-Helmy/Currency-Exchange-Public-API.git
   cd Currency-Exchange-Public-API
   
2. **Install dependencies**
   npm install

3. **Configure environment variables**
   Create a .env file in the root directory and add the necessary environment variables. For example:
     PORT=3000
     APY_TOKEN=your_apyhub_api_token (my_apyhub_api_token = '84516b3ea1585135975a7e4d', if u want to try with it)

4. **Run the application**
   npm start

## API Documentation
The API documentation is available at http://localhost:3000/api-docs

## Docker
To run the application using Docker:

1. **Build the Docker image**
   docker build -t exchanger

2. **Run the Docker container**
   docker run -p 3000:3000 exchanger
