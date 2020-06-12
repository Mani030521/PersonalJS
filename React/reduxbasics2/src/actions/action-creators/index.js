export default function actionCreator(payload) {
	return (dispatch) =>
		setTimeout(() => {
			return dispatch({
				type: "STORE_RESULT",
				payload: payload,
			})
		}, 2000)
}
