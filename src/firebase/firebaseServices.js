import { addDoc, collection, getDocs } from '@firebase/firestore'
import {
  employeesListError,
  employeesListLoading,
  employeesListSuccess,
} from '../Redux/actions/actionGetEmployees'
import { db } from './firebase'

export const getEmployees = async (store) => {
  store.dispatch(employeesListLoading())
  try {
    const employeesCollectionRef = collection(db, 'employees')
    const data = await getDocs(employeesCollectionRef)
    const employees = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    store.dispatch(employeesListSuccess(employees))
  } catch (error) {
    store.dispatch(employeesListError(error.message))
  }
}

export const addAndGetEmployees = async (store, newEmployee) => {
  store.dispatch(employeesListLoading())
  try {
    const employeesCollectionRef = collection(db, 'employees')
    await addDoc(employeesCollectionRef, newEmployee())
    const data = await getDocs(employeesCollectionRef)
    const employees = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    store.dispatch(employeesListSuccess(employees))
  } catch (error) {
    store.dispatch(employeesListError(error.message))
  }
}
