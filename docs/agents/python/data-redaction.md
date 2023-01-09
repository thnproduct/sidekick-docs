# Data Redaction

Sidekick Python agent lets you define custom data redaction functions. Below you can see an example:

| Config                                | Requirement | default |
| ------------------------------------- | ----------- | ------- |
| tracepoint\_data\_redaction\_callback | Optional    |         |
| log\_data\_redaction\_callback        | Optional    |         |

```
from pathlib import Path
from dotenv import load_dotenv

env_path = Path('.env').resolve()
load_dotenv(dotenv_path=env_path)

def tracepointRedactFunc(vals):
    if(vals["file_name"] == "authfile.py"):
        vals["frames"]=None

def logRedactFunc(vals):
    if(vals["log_message"] == "critical info"):
        vals["log_message"]="deleted"

try:
    import tracepointdebug
    tracepointdebug.start(tracepoint_data_redaction_callback=tracepointRedactFunc, log_data_redaction_callback=logRedactFunc)
except ImportError as e:
    pass

from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello, World!'

```
