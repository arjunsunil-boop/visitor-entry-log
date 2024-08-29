from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy
from flask_mysqldb import MySQL
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)



# db = SQLAlchemy()
# ma = Marshmallow()
# 


# class User(db.Model):
#     name = db.Column(db.String(100), nullable=False)
#     email = db.Column(db.String(100), primary_key=True)
#     age = db.Column(db.Integer, nullable=False)
#     date = db.Column(db.Date, nullable=False)

#     def __init__(self, name, email, age, date):
#         self.name = name
#         self.email = email
#         self.age = age
#         self.date = date
        
# class UserSchema(ma.Schema):
#     class Meta:
#         fields = ("name", "email", "age", "date")   
        
# user_schema = UserSchema()
# users_schema = UserSchema(many=True)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:@localhost/apitest'

              

# db.init_app(app)

# with app.app_context():
#     db.create_all()

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'apitest'
mysql = MySQL(app)

@app.route("/add", methods=["POST"])
def add_user():
    _json = request.json
    name = _json['name']
    email = _json['email']
    age = _json['age']
    date = _json['date']
    # new_user = User(name=name, email=email, age=age, date=date)
    # db.session.add(new_user)
    # db.session.commit()
    cursor = mysql.connection.cursor()
    cursor.execute("INSERT INTO user(name, email, age, date) VALUES(%s, %s, %s, %s)", (name, email, age, date))
    mysql.connection.commit()
    cursor.close()
    return jsonify("User added successfully")

@app.route("/users", methods=["GET"])
def get_users():
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT name, email, age, date FROM user")
    rows = cursor.fetchall()
    cursor.close()
    users = []
    for row in rows:
        user = {
            'name': row[0],
            'email': row[1],
            'age': row[2],
            'date': row[3].strftime('%Y-%m-%d')  # Format date as string
        }
        users.append(user)
    return jsonify(users)

@app.route("/search", methods=["POST"])
def search_users():
    __json = request.json
    searchName = __json['searchName']
    
    cursor = mysql.connection.cursor()
    query = "select name, email, age, date from user where name like %s"
    cursor.execute(query, (searchName + '%',))
    rows = cursor.fetchall()
    cursor.close()
    users =[]
    for i in rows:
        user = {
            'name' : i[0],
            'email': i[1],
            'age': i[2],
            'date': i[3].strftime('%Y-%m-%d')
        }
        users.append(user)
    return jsonify(users)
    
       
if __name__ == "__main__":
    app.run(debug=True)