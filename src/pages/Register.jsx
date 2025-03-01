import React, { useContext } from 'react'
import { AuthContext } from '../provider'

export default function Register() {
    const { CreateUser, setUser,user } = useContext(AuthContext)
    console.log("🚀 ~ Register ~ user:", user)
    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const pass = form.get('password')
        CreateUser(email, pass)
            .then((res) => {
                setUser(res.user)
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                                <a href="/auth/login">already have account</a>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
