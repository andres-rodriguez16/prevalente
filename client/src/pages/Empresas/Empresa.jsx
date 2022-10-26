import React, { useEffect, useState } from 'react';
import { getEmpresas } from '../../Redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import CardEmpresa from '../../component/Card empresas/CardEmpresa';
import Paginado from '../../component/Paginado/Paginado';

function Empresa() {
  const empresa = useSelector(state => state.empresas);
  const dispatch = useDispatch();

  const [actualPage, setActualPage] = useState(1);
  const [empresaPorPagina] = useState(1);
  const indeceUltimaEmpresa = actualPage * empresaPorPagina;
  const indeceDelPrimero = indeceUltimaEmpresa - empresaPorPagina;
  const actualEmpresa = empresa?.slice(indeceDelPrimero, indeceUltimaEmpresa);
  const [totalDeEmpresa, settotalDeEmpresa] = useState(4);
  const nextPag = () => {
    setActualPage(actualPage + 1);
    settotalDeEmpresa(totalDeEmpresa - 1);
  };
  const previusPag = () => {
    setActualPage(actualPage - 1);
    settotalDeEmpresa(totalDeEmpresa + 1);
  };

  useEffect(() => {
    dispatch(getEmpresas());
  }, [dispatch]);
  
  return (
    <main>
      {console.log(actualEmpresa[0])}
      {actualEmpresa?.map(e => (
        <CardEmpresa
          key={e.id}
          empleados={e.empleados}
          identificacion={e.identificacion}
          nombre={e.nombre}
          razonSocial={e.razonSocial}
          nit={e.nit}
          logo={e.logo}
          id={e.id}
          aprobada={e.aprobada}
          rechazada={e.rechazada}
        />
      ))}
      <Paginado
        empresas={empresa.length}
        empresaPorPagina={empresaPorPagina}
        actualPage={actualPage}
        nextPag={nextPag}
        previusPag={previusPag}
        page={totalDeEmpresa}
      />
    </main>
  );
}

export default Empresa;
