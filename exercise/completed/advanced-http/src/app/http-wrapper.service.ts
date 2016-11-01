import {Injectable} from "@angular/core";
import {Http, Response, RequestOptionsArgs, BaseRequestOptions} from "@angular/http";
import {Observable} from "rxjs";
@Injectable()
export class HttpWrapper {
	constructor(public http: Http) {
		
	}
	
	get(url: string, options?: RequestOptionsArgs): Observable<Response> {
		let jsonOptions: RequestOptionsArgs = this.getJSONOptions(options);
		return this.http.get(url, jsonOptions)
		.retry(2);
	}
	
	post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		let jsonOptions: RequestOptionsArgs = this.getJSONOptions(options);
		
		return this.http.post(url, body, jsonOptions)
		.retry(2);
	}
	
	put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
		let jsonOptions: RequestOptionsArgs = this.getJSONOptions(options);
		
		return this.http.put(url, body, jsonOptions).catch((error) => {
			console.log("error: " + error.status);
			switch (error.status) {
				case 401:
					break;
				case 403:
					break;
			}
			
			return Observable.throw(error);
		});
	}
	
	getJSONOptions(options: RequestOptionsArgs = new BaseRequestOptions() ): RequestOptionsArgs {
		let contentType: string = options.headers.get("Content-Type");
		
		if ( !contentType ) {
			options.headers.append("Content-Type", "application/json");
		}
		
		return options;
	}
}