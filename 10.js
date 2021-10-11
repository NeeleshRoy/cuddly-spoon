function uniques(str1, str2) {
    const a = str1.split('');
    const b = str2.split('');

    console.log((a.filter(alphabet => !b.includes(alphabet)).join('')));
    console.log((b.filter(alphabet => !a.includes(alphabet)).join('')));
}

uniques("ABC", "BC");
uniques("BC", "BANGALORE");

async function printEmail() {
    const promises = [1,3,10].map(async id => {
        const response = await fetch(`https://reqres.in/api/users/${id}`);
        return await response.json();
    })

    const json = await Promise.all(promises);
    json.forEach(data => console.log(data?.data?.email));
}

printEmail();