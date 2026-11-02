FROM ubuntu:latest

WORKDIR /app

COPY requirements.txt /app/

RUN apt-get update && apt-get install -y python3 python3-pip python3-venv

SHELL ["/bin/bash", "-c"]

RUN python3 -m venv venv

RUN source venv/bin/activate && pip install -r requirements.txt

COPY . /app/

ENTRYPOINT ["/app/venv/bin/flask","--app","main.py"]

EXPOSE 8080

CMD ["run","--host=0.0.0.0","--port=8080"]