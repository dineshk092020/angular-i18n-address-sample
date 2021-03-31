import { Component, VERSION } from "@angular/core";
import AddressFormatter from "@shopify/address";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  displayAddress_ja;
  displayAddress_de;
  ngOnInit() {
    const address = {
      company: "Shopify1",
      firstName: "恵子",
      lastName: "田中",
      address1: "八重洲1-5-3",
      address2: "",
      city: "目黒区",
      province: "JP-13",
      zip: "100-8994",
      country: "JP",
      phone: ""
    };
    const address_DE = {
      company: "Comp1",
      firstName: "Name1",
      lastName: "Last1",
      address1: "Leopoldstraße 36",
      address2: "",
      zip: "12159",
      city: "Berlin Friedenau",
      country: "DE",
      phone: "030 71 47 29"
    };

    var addressFormatter = new AddressFormatter("ja");
    addressFormatter.format(address).then(
      val => {
        console.log(val);
        var add1 = "";
        val.forEach(function(value) {
          if (value) {
            add1 = add1 + value + "\r\n";
          }
        });
        this.displayAddress_ja = add1;
      },
      err => console.error(err)
    );

    addressFormatter = new AddressFormatter("de");
    addressFormatter.format(address_DE).then(
      val => {
        console.log(val);
        var add1 = "";
        val.forEach(function(value) {
          if (value) {
            add1 = add1 + value + "\r\n";
          }
        });
        this.displayAddress_de = add1;
      },
      err => console.error(err)
    );
  }
}
