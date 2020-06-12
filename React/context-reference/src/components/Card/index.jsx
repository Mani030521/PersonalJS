import React from 'react'
import '../Layout/Layout.css'

export default function Card({ employee_salary, employee_name, employee_age, id }) {
    return (
        <div className="card">
            <div className="cardcontent">
                <div className="content-info">
                    <p>Name: {employee_name}</p>
                    <p>Age: {employee_age}</p>
                    <p>Salary: {employee_salary}</p>
                </div>
            </div>
        </div>
    )
}