const formItems: object[] = [
    { type: 'text', label: "Full Name"},
    { type: 'text', label: "Username"},
    { type: 'tel', label: "Phone Number"},
    { type: 'email', label: "Email" },
    { type: 'password', label: "Password"},
    { type: "password", label: "Confirm Password"}
]

export function Form() {
    return (
        <>
            <form className="w-full">
                <section className="w-full grid grid-cols-2 grid-rows-3">
                    
                </section>
            </form>
        </>
    )
}