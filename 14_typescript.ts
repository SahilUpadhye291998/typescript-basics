interface Printable {
    print(message: string): void;
}

class SampleDocument implements Printable {
    print(message: string): void {
        console.log(`${message} is being sent for printing`)
    }
}

let sampleDocument: Printable = new SampleDocument();
sampleDocument.print("sample interface application");