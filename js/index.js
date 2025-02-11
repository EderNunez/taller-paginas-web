fetch('https://script.googleusercontent.com/macros/echo?user_content_key=41JsTHfCjNoWgRLT6dgILMdvnbtsxG4_oBbSToAEIK8C9DppqU45A4XJN6fmwzj_2CZ4G3a_PuobWBjSIxAiFDmz9k48Mrf1m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnHFxJsOqqGTxRUD-IqJDWsKthlK0Zwyyj-sMsVGCwINvsuheg0VPbbr_Z05QLT0DfjV8fYiwH4UPf8PMv2hopZvuLZNfWSO_Jdz9Jw9Md8uu&lib=MZj_kfHkoxrRpYNE8CWpKtGJUPzYgWWy8')
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(error => console.error("Error al obtener los datos:", error));