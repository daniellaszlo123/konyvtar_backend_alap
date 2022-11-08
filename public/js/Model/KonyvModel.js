class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
        //console.log("KonyvModel");
        this.token=token
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#konyvekTomb = data;
                //console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatTorol(vegpont, adat){
        //console.log("törlöm", adat);
        vegpont+= "/"+adat.id

        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                'X_CSRF-TOKEN' : this.token
            }
        })
            .then()
            .then(() => {
                console.log("torolt");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    adatModosit(vegpont, adat){
        //console.log("modosit", adat);
        vegpont+= "/"+adat.id

        fetch(vegpont, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X_CSRF-TOKEN' : this.token
            },
            body: JSON.stringify(adat)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('modos:', data.updatedAt);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    termekKosarba(adat){
        //console.log("kosarba rak", adat);

    }
    termekMegtekint(adat){
        //console.log("megtekint", adat);
    }
}

export default KonyvModel;