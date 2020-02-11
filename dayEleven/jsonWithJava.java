/*
    Note: not the full code! Snippet
*/

package jsonproject;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

public class readdatafromjson {
	public static void main(String[] args) throws IOException, ParseException {

	//creating object
    JSONParser jsonparser=new JSONParser();
    //reading file path
    FileReader reader=new FileReader(".\\jsonfile\\emp.json");
    
    //passing json data and creating java object
    Object obj=jsonparser.parse(reader);
  
    //convert java object to json object for reading values
    JSONObject empjsonobj=(JSONObject)obj;

    //extract data from json file
    String ename=(String) empjsonobj.get("empname");
    String elocation=(String) empjsonobj.get("emplocation");
    System.out.println("Emplyoee Name is" +ename);
    System.out.println("Emplyoee location is" +elocation);

    //how to extract array values
    //JSONArray array=(JSONArray)empjsonobj.get("address");
        //for(int i=0;i<array.size();i++)
    //{
        //  JSONObject address=(JSONObject) array.get(i);
        //get the key and value from address array
        //String street=(String) address.get("street");
        //String city=(String) address.get("city");
        //String state=(String) address.get("state");
        //System.out.println("The address of "+i+"is");
        //System.out.println("street:"+street);
        //System.out.println("city:"+city);
        //System.out.println("state:"+state);
    }
}