import Swal from "sweetalert2";

export const showErrorResquest = ( arrayMsg ) => {
    let templateError = '';
    arrayMsg.forEach(element => {
        const { param, msg } = element;
        templateError += `This error "<i style='color: red'>${msg}</i>" is detect in the ${param} field. <br/><br/>` ;
    });

    Swal.fire({
        title: '<strong>Upps... Unespected error is detected!</strong>',
        icon: 'error',
        html: templateError,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `Ok`,
    })
}