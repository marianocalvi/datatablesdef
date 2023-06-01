$(document).ready(function() {
  $.getJSON('datos.json', function(data) { // Reemplaza 'datos.json' con la ruta y nombre de tu archivo JSON
    var table = $('#myTable').DataTable();

    $.each(data, function(index, item) {
      table.row.add([
        item.LOCATION,
        item.RESDATE,
        item.TOURDATE,
        item.GLMRES,
        item.PACKAGECODE,
        item.ORBIT,
        item.RECONFIRM,
        item.NAME,
        item.CELL,
        item.TOUR,
        item.HTL,
        item.PUTIME,
        item.ADL,
        item.PPPRICEC,
        item.CHD,
        item.PPPRICEC,
        item.PPSHCHG,
        item.GROSSSALE,
        item.SOURCE,
        item.COMMISSION,
        item.NETSALE,
        item.SUPPLIER,
        item.SUPPRES,
        item.SPRICEPP,
        item.TOTALDUES,
        item.NETPROFIT,
        item.PROFIT,
        item.PAXPYMT, 
        item.SUPPLIERINVOICE,
        item.SUPPLIERRECON,
        item.NOTES,
        item.ATTENTION,
        item.SPRICEPPC,
        item.CODE, 
        item.PUTIMEOTHER,
        item.STATUS,
        item.NOTES2,
        item.TOUROTHER,
        item.SHEDULE,
        item.COMMENTS,
        item.EMAIL,
        item.CRO,
        item.AGENT,
        item.RESENDING,
        item.COMMENTS2,
        item.NOTIFICATIONES,
        item.CHANGESERVICE,
        item.LOCATION,
        item.PROMO,
        item.INF,
        item.PPPRICEI,
        item.NETGLT,
        item.USER,
        item.SUPPLIER,
        item.SUPPRES,
        item.SPRICEPP,
        item.SPRICEPPC,
        item.SPRICEPPI,
        item.TOTALDUES,
        item.SUPLIERINVOICE,
        item.ID,
        item.STATUS,
        item.CARTID,
        item.LOCATION
        


        // Agrega más datos de las propiedades del objeto según tus necesidades
      ]).draw();
    });
  });
});
