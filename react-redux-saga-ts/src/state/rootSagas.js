import { takeLatest, put, call, select } from 'redux-saga/effects';
import { setAvailableProducts, setIsLoading, searchSelector } from "./cart";

function* fetchProducts() {
  yield put(setIsLoading(true));

  const search = yield select(searchSelector);

  let url = `http://localhost:3001/products`

  if (search) {
    url += `?title_like=${search}`;
  }

  const response = yield call(fetch, url, {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = yield response.json();

  yield put(setAvailableProducts(data));

  yield put(setIsLoading(false));
}

export default function* rootSagas() {
  yield takeLatest("cart/fetchAvailableProducts", fetchProducts);
}