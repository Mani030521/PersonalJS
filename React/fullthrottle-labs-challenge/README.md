# Simplified Monthly Loan Payment Calculator 

It was a Round 2 task given to me by people at Fullthrottle Labs, for Recruitment purposes. Its purpose was to test my Frontend Development Skills, as well as my Programming Skills. They were to judge me on <br/>
•	Code correctness. <br/>
•	Overall code quality. <br/>
•	UI/UX <br/>
•	Documentation <br/>


## Fullthrottle Labs' Problem Statement

Design and implement a user interface that allows a user to enter a loan amount and a loan duration in months which then displays the interest rate and the monthly payment.
The user must be able to enter (at least) the monetary amount by using a slider.  The calculated values should automatically update as the slider is used -without requiring any further interaction by the user.
The loan amount should be between $500 and $5000 and the loan duration between 6 and 24 months.
You should use the following API - https://ftl-frontend-test.herokuapp.com/interest?amount=<amount>&numMonths=<numMonths>
This returns a JSON object with information about the monthly payment and the interest rates.

## Usage

You can choose `Amount` and `Number of Months` for which you want to take the loan. As per the given inputs corresponding data is displayed. <br/>
•	Amount <br/>
•	Principal <br/>
•	Rate <br/>
•	Time in months <br/>
•	Time in years <br/>
•	Monthly Payment to be made <br/>
•	No. of Paments to be made <br/>

You can Input your data via Range Sliders, or by directly typing in the Amount and No. of Months. <br/>
The Amount and Months displayed over respective RangeSliders can be edited directly.<br/>
Use the Submit button to fetch the data, if you are not using the Range Sliders to set the values.


## Deployment

This project is deployed on AWS, using s3 StaticHosting service.
You can check it out [here](https://s3-us-west-2.amazonaws.com/fullthrottle-labs-react-task/index.html)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Structure

I have divided my Files majorly into 2 Folders `containers` and `components`.
Container holds the Logical Components, In our case its the `App` Component which holds whole application's state in a way, and other components alter the state values via the mutator functions provided by `App` Component/Container.
Components in `component` holds mostly the UI part of the code, and don't handle any data directly. <br/>
|-containers<br/>
--|-App&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our main Application Component that hold the data and it's state is a common source for data <br/>
|-components<br/>
--|-Header&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Displays Navigation Bar<br/>
--|-RangeSlider&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Returns a Range Slider Component <br/>
--|-RangeSliderForm&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Displays the Full Input Form, and uses RangeSlider Component<br/>
--|-ResultsView&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Displays Results, in a formatted way<br/>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
