import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) => {
  return (
    <header>
        <h1>
            Planificador de Gastos
            <NuevoPresupuesto 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
            />
        </h1>
    </header>
  )
}

export default Header