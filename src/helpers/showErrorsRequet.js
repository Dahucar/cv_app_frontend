import Swal from "sweetalert2";

export const showErrorResquest = ( arrayMsg ) => {
    let templateError = '';
    arrayMsg.forEach(element => {
        const { param, msg } = element;
        templateError += `This error "<i style='color: red'>${msg}</i>" is detect in the <strong>${param}</strong> field. <br/><br/>` ;
    });

    Swal.fire({
        title: '<strong>Oops... Unexpected error is detected!</strong>',
        icon: 'error',
        html: templateError,
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `Ok`,
    })
}