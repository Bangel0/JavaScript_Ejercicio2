/*Creación de variables para el funcionamiento del programa*/

let continuar = true

let vendedorActual = ''
let totalVendidos = 0
let comisiónTotal = 0

// Variables para almacenar algunas
let maxVentasVendedor = ''
let maxVentasMonto = 0
let totalElectrodomestícos = 0
let totalTecnología = 0
let totalHogar = 0

let numVendedores = 0

console.log(
  'Sistema de gestión de venta - Tienda de hogar, Electrodoméstico, Tecnología'
)
/*Función para ingresar datos de vendedores*/

while (continuar) {
    let nombreVendedores = prompt(
      'Ingrese el nombre del vendedor o \n Salir para terminar.'
    )
    if (nombreVendedores.toLowerCase() === 'salir') {
      continuar = false
      break
    }
  
    vendedorActual = nombreVendedores
    numVendedores++
    let totalvendidovendedor = 0
    let comisionVendedor = 0
  
    let procesarVentas = true
    while (procesoVentas) {
      let opcion = prompt(
        'Categorías de productos:\n' +
          '1. Electrodomésticos (Neveras, Lavadoras, Microondas) - 5% comisión\n' +
          '2. Tecnología (Celulares, Laptops, Televisores) - 8% comisión\n' +
          '3. Hogar (Sofás, Mesas, Sillas) - 10% comisión\n' +
          '4. Terminar con este vendedor\n' +
          'Seleccione una categoría (1-4):'
      )
  
      if (opcion === '4') {
        procesarVentas = false
        continue
      }
  
      let montoVenta = parseFloat(prompt('Ingrese el monto de la venta: $'))
      let comision = 0
  
      if (opcion === '1') {
        comision = montoVenta * 0.05
        totalElectrodomesticos += montoVenta
        console.log(`Comisión por esta venta: $${comision.toFixed(2)}`)
      } else if (opcion === '2') {
        comision = montoVenta * 0.08
        totalTecnologia += montoVenta
        console.log(`Comisión por esta venta: $${comision.toFixed(2)}`)
      } else if (opcion === '3') {
        comision = montoVenta * 0.1
        totalHogar += montoVenta
        console.log(`Comisión por esta venta: $${comision.toFixed(2)}`)
      } else {
        alert('Opción no válida. Intente nuevamente.')
        continue
      }
  
      totalVendidoVendedor += montoVenta
      comisionVendedor += comision
    }
  
    // Mostrar resumen del vendedor
    console.log(`\nResumen para ${vendedorActual}:`)
    console.log(`Total vendido: $${totalVendidoVendedor.toFixed(2)}`)
    console.log(`Comisión total: $${comisionVendedor.toFixed(2)}`)
  
    // Actualizar estadísticas generales
    totalVendido += totalVendidoVendedor
    comisionTotal += comisionVendedor
  
    // Verificar si es el vendedor con más ventas
    if (totalVendidoVendedor > maxVentasMonto) {
      maxVentasMonto = totalVendidoVendedor
      maxVentasVendedor = vendedorActual
    }
  }
  
  // 
  console.log('\n--- Reporte Final ---')
  console.log(`Total de vendedores procesados: ${numVendedores}`)
  console.log(
    `Total vendido por todos los vendedores: $${totalVendido.toFixed(2)}`
  )
  console.log(`Total de comisiones pagadas: $${comisionTotal.toFixed(2)}`)
  
  if (numVendedores > 0) {
    console.log(
      `\nVendedor con mayores ventas: ${maxVentasVendedor} ($${maxVentasMonto.toFixed(
        2
      )})`
    )
  
    // Determinare la categoría que más se vende. 
    if (
      totalElectrodomesticos > totalTecnologia &&
      totalElectrodomesticos > totalHogar
    ) {
      console.log('Categoría más vendida: Electrodomésticos')
    } else if (
      totalTecnologia > totalElectrodomesticos &&
      totalTecnologia > totalHogar
    ) {
      console.log('Categoría más vendida: Tecnología')
    } else if (
      totalHogar > totalElectrodomesticos &&
      totalHogar > totalTecnologia
    ) {
      console.log('Categoría más vendida: Hogar')
    } else {
      console.log('Varias categorías tienen el mismo monto de ventas')
    }
  
    console.log('\nVentas por categoría:')
    console.log(`- Electrodomésticos: $${totalElectrodomesticos.toFixed(2)}`)
    console.log(`- Tecnología: $${totalTecnologia.toFixed(2)}`)
    console.log(`- Hogar: $${totalHogar.toFixed(2)}`)
  } else {
    console.log('No se ingresaron datos de vendedores.')
  }
  
  console.log('\nGracias por usar el sistema de gestión de ventas!')