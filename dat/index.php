<!DOCTYPE html>
<html>
<head>
	<title>DB</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<h1>DB</h1>
		<link href = "registration.css" type = "text/css" rel = "stylesheet" />
		<h2>Sign Up</h2>
		<form name = "order" action="modified.php" method = "post" enctype = "multipart/form-data">
			<div>
                <div class="form_group">
                    <label for="name">Name:</label>
                    <input type = "text" id="name" name = "fname" value = "" required/>
                </div>
                <div class = "form_group">
                    <label>Password:</label>
                    <input type = "password" name = "pwd" value = "" required/>
                </div>
            </div>
            <input type="submit" name="submit" value="submit">
        </form>
</body>
</html>