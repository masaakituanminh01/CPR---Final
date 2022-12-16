function addToCart(bookId, isAuthenticated = false) {
  isAuthenticated = isAuthenticated == 'True'
  if (!isAuthenticated) {
    $('#login-form').modal('toggle')
    $('.login-tab').addClass('active')
    return
  }
  fetch('/book-detail/api/add-to-cart', {
    method: 'post',
    body: JSON.stringify({
      'book_id': bookId,
      'book_amount': $('#bookAmountInput').val()
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(result => {
    if (result['result'])
      Swal.fire(
        'Add to cart successfully!!!',
        'Your cart has been updated.',
        'success'
      ).then(function () {
        getCartDetailAmount()

      })
    else
      Swal.fire({
        title: 'Add to cart failed',
        text: 'Please try again',
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok',
      })
  })
}

function getCartDetailAmount() {
  fetch('/gio-hang/api/amount-book').then(res => res.json()).then(result => {
    $('#cartDetailAmount').text(result['amount'])
  })
}

getCartDetailAmount()