const useFormat = () => {
    const formatPriceInUSD = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price)
    }

    const formatPriceInARS  = (value) => {
        return new Intl.NumberFormat('es-AR', {
            style: 'currency',
            currency: 'ARS',
        }).format(value)
    }

    return {
        formatPriceInUSD,
        formatPriceInARS
    }
}

export default useFormat
