import Header from "../components/header";
import styles from "../styles/EOM.module.css";

const EOM = ({employee}) => {
	console.log(employee)
	return (
		<>
			<Header />
			<div className="container">
				<h1 className="text-center">Employee of The Month</h1>
				<div className={styles.text_block}>
					<img src={employee.image} alt={employee.name} />
					<h3>{employee.name}</h3>
					<div className="">{employee.position}</div>
					<div className={styles.description}>{employee.description}</div>
				</div>
			</div>
		</>
	)
}

//server side rendering
export const getServerSideProps = async PageContext => {
	const resp = await fetch (
		'http://localhost:3000/employeeOfTheMonth'
	);
	const employee = await resp.json();

	return {
		props: {
			//any prop we want to provide this component we put inside of this props
			employee: employee // if we have same name we can write like this
		},
	};
};

export default EOM;
