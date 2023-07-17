import NuevoPresupuesto from "./NuevoPresupuesto"

const Header = ({presupuesto, setPresupuesto}) => {
  return (
    <header>
        <h1>
            Planificador de Gastos
            <NuevoPresupuesto 
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
            />
        </h1>
    </header>
  )
}

export default Header