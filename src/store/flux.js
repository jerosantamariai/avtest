const getState = ({getStore, getActions, setStore}) => {
    return {
        store: {
            character: null,
            university: null,
        },
        actions: {
            getCharacters: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            character: data
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
            getUniversities: url => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            university: data
                        });
                    })
                    .catch(error => {
                        console.log(error)
                    })
            },
        }
    }
}

export default getState;