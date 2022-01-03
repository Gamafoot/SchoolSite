from flask import Flask, render_template, request

app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/', methods=['GET'])
def main():
    if request.method == 'GET':
        print(request.args.get('comp_select'))
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)