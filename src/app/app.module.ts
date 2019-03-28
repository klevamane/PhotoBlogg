
// NgModule is the foundation for any Angular application
import { NgModule } from '@angular/core'; //npm now supports namespace packages
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent } from './entries';

@NgModule({
    // By including the Imports module, Angular now knows that the app will be used
    // In the web browser, and will pack the BrowserModule and tge app module when it compiles the application
    imports: [BrowserModule],
    // The declarations property is for registering all of the application's components
    // Before using a component for the first time, they need to be added to the declarations array
    // Its important to always put the child components first
    declarations: [AppComponent, EntryComponent, EntryListComponent],
    // Acts as the entry point, or the root of the application
    bootstrap: [AppComponent]
})
export class AppModule {

}
